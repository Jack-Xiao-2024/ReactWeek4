function Pagination({ pageinfo, handlePageChange }) {
  return (
    <div className="d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className={`page-item ${!pageinfo.has_pre && "disabled"}`}>
            <a
              onClick={() => handlePageChange(pageinfo.current_page - 1)}
              className="page-link"
              href="#"
            >
              上一頁
            </a>
          </li>

          {Array.from({ length: pageinfo.total_pages }).map((_, index) => (
            <li
              key={index}
              className={`page-item ${
                !pageinfo.current_page === index + 1 && "active"
              }`}
            >
              <a
                onClick={() => handlePageChange(index + 1)}
                className="page-link"
                href="#"
              >
                {index + 1}
              </a>
            </li>
          ))}

          <li className={`page-item ${!pageinfo.has_next && "disabled"}`}>
            <a
              onClick={() => handlePageChange(pageinfo.current_page + 1)}
              className="page-link"
              href="#"
            >
              下一頁
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
