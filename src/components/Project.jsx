import React, { useState } from "react";
import ProjectDetailsModel from "./ProjectDetailModel/ProjectDetailsModel";
import ProjectData from "./ProjectData";
import ReactPaginate from "react-paginate";

const Project = () => {
  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const projectsPerPage = 12;
  const pagesVisited = pageNumber * projectsPerPage;

  const selectedFunction = (item) => {
    console.log(item);
    if (show == true) {
      setShow(false);
      setSelectedData({});
    } else {
      setShow(true);
      setSelectedData(item);
    }
  };

  const pageCount = Math.ceil(ProjectData.length / projectsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My{" "}
          <span className="text-cyan-600">
            Projects{" "}
            <span className="mb-3" style={{ fontSize: "25px" }}>
              ({ProjectData?.length})
            </span>{" "}
          </span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg mb-8">My awesome works</p>
      </div>
      <br />
      <div className="flex w-[85%] gap-6 mx-auto items-center relative">
        <div className="projects_details w-full">
          {ProjectData.slice(pagesVisited, pagesVisited + projectsPerPage).map(
            (project_info, i) => (
              <div
                key={i}
                className="portfolios h-fit w-full  bg-slate-700 rounded-lg"
              >
                <img
                  src={project_info.img}
                  alt=""
                  className="rounded-tl-md rounded-tr-md"
                />
                <h3 className="text-xl my-3 ml-3">{project_info.name}</h3>
                <div className="flex margin__left gap-3 pl-3 pr-3 pb-4">
                  <a
                    className="text-cyan-600 bg-gray-800 px-2 rounded-sm py-1 inline-block cursor-pointer"
                    onClick={() => selectedFunction(project_info)}
                  >
                    Details
                  </a>
                  <a
                    href={project_info.github_link}
                    target="_blank"
                    className="text-cyan-600 bg-gray-800 rounded-sm px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                  <a
                    href={project_info.live_link}
                    target="_blank"
                    className="text-cyan-600 bg-gray-800 rounded-sm px-2 py-1 inline-block"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            )
          )}
          
        </div>
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      {show && (
        <ProjectDetailsModel
          show={show}
          selectedData={selectedData}
          onHide={() => setShow(false)}
        />
      )}
    </section>
  );
};

export default Project;
