import projectsDb from "../projects.json";

function generateDeployedURL(
  deploymentMethod,
  deployedName,
  gitHubUser = "j-preim"
) {
  let deployedURL;
  if (deploymentMethod === "gitHub") {
    deployedURL = `https://${gitHubUser}.github.io/${deployedName}`;
  } else if (deploymentMethod === "heroku") {
    deployedURL = `https://${deployedName}.herokuapp.com`;
  }
  return deployedURL;
}

function generateRepositoryURL(gitHubName, gitHubUser = "j-preim") {
  return `https://github.com/${gitHubUser}/${gitHubName}`;
}

export default function Project() {
  return (
    <>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {projectsDb.map((project) => (
          <div className="col">
            <div className="card col h-100">
              <img src={`./${project.gitHubName}.png`} className="card-img-top" alt="" />
              <div className="card-body" id={project.id} key={project.title}>
                <h5 className="card-title">{project.title}</h5>
                <div className="card-body">
                  <a
                    href={generateDeployedURL(
                      project.deploymentMethod,
                      project.deployedName,
                      project?.gitHubUser
                    )}
                    className="card-link"
                    target="_blank"
                  >
                    Deployed App
                  </a>
                  <a
                    href={generateRepositoryURL(
                      project.gitHubName,
                      project.gitHubUser
                    )}
                    className="card-link"
                    target="_blank"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
