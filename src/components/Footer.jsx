export default function Footer() {
  return (
    <>
      <div className="my-2 text-center">
        <a
          href="https://www.linkedin.com/in/joe-preimesberger-5962802b/"
          target="_blank"
        >
          <i
            className="me-3 fa-brands fa-linkedin fa-3x fa-fw icon"
            id="linkedIn"
          />
        </a>
        <a href="https://github.com/j-preim/" target="_blank">
          <i
            className="me-3 fa-brands fa-github fa-3x fa-fw icon"
            id="gitHub"
          />
        </a>
        <a href="https://www.salesforce.com/trailblazer/jpreimesberger" target="_blank">
        <i
          className="ms-1 fa-brands fa-salesforce fa-3x fa-fw icon"
          id="salesforce"
        />
        </a>
      </div>
      <p className="my-2 text-center h6">&copy; Joe Preimesberger 2024</p>
    </>
  );
}
