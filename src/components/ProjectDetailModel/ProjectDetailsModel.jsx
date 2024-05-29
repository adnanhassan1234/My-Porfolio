import { RxCross1 } from "react-icons/rx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ProjectDetailsModel = (props) => {
  const { selectedData } = props;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        props.show ? "block" : "hidden"
      }`}
    >
      <div className="flex items-end justify-center min-h-screen  pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-700 opacity-75"></div>
        </div>

        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen "
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle w-[45rem]"
          style={{ maxHeight: "570px", overflowY: "auto" }}
        >
          <div className="bg-slate-700 p-4 flex justify-between">
            <h4 className="text-center text-white">Project Details</h4>
            <div className="cursor-pointer" onClick={props.onHide}>
              <RxCross1 />
            </div>
          </div>
          <div className="mt-0">
            {/* Your form content goes here */}
            <div className="mb-2">
              <Slider {...settings}>
                {selectedData?.images?.map((content, ind) => (
                  <div key={ind}>
                    <img
                      src={content}
                      alt={`Project Image ${ind + 1}`}
                      className="w-full"
                    />
                  </div>
                ))}
              </Slider>
            </div>
            <p
              className="text-black p-3"
              dangerouslySetInnerHTML={{ __html: selectedData?.Project_des }}
            />
            {selectedData?.email && (
              <h5 className="text-black font-semibold technology mx-3">
                Email: {selectedData.email}
              </h5>
            )}
            {selectedData?.password && (
              <h5 className="text-black font-semibold technology mx-3">
                Password: {selectedData.password}
              </h5>
            )}

            <div className="mb-1 p-3">
              <p className="text-gray-600">Technologies Used:</p>
              <p className="text-black font-semibold technology">
                <span>
                  {selectedData?.technologies
                    ? selectedData.technologies.join(", ")
                    : ""}
                </span>
              </p>
            </div>
            <hr />
            <div className="flex justify-end my-3 mx-2">
              <a
                className="text-white bg-red-500 px-2 py-1 inline-block rounded-sm mx-3 cursor-pointer"
                onClick={props.onHide}
              >
                Cancel
              </a>
              <a
                href={selectedData?.github_link}
                target="_blank"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block rounded-sm"
              >
                Github
              </a>
              <a
                href={selectedData?.live_link}
                target="_blank"
                className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block mx-4 rounded-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsModel;
