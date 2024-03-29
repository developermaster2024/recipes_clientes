import { IoChevronForwardSharp, IoChevronBack } from "react-icons/io5";
import clsx from "clsx";
import { useEffect, useState } from "react";

const PaginationButton = ({ children, active, onClick }) => {
  return <div
    onClick={onClick}
    className={clsx([
      `inline-flex items-center justify-center cursor-pointer
      w-6 h-6
      font-semibold hover:bg-main hover:text-white
      border border-gray-300
      transition duration-300
      p-5
      rounded-full`,
      {
        'bg-main text-white': active,
        'text-gray-700': !active,
      }
    ])}
  >
    {children}
  </div>;
};

const NavigationButton = ({ icon, color, className, onClick, canNext, hidden }) => {
  return (
    <button hidden={hidden} onClick={onClick} className={`text-${color} ${className}`} disabled={canNext}>
      {icon}
    </button>
  )
};


const Pagination = ({ pages, onChange, activePage, className }) => {

  const [canNext, setCanNext] = useState(true);
  const [canBack, setCanBack] = useState(false);

  const nextPage = (page) => {
    if (page <= pages) {
      onChange(page);
    }
  }
  const backPage = (page) => {
    if (page >= 1) {
      onChange(page);
    }
  }

  useEffect(() => {
    if (activePage < pages) {
      setCanNext(true);
    } else {
      setCanNext(false);
    }

    if (activePage > 1) {
      setCanBack(true);
    } else {
      setCanBack(false);
    }
  }, [activePage, pages])

  if (pages === 1) {
    return null;
  }

  return <ul className={`hidden-scrollbar flex items-center space-x-2 ${className}`} style={{ maxWidth: '100%', overflowX: 'auto', scrollBehavior: 'none' }}>
    <li>
      <p>
        <NavigationButton
          hidden={!canBack}
          disable={!canBack}
          onClick={() => { backPage(activePage - 1) }}
          color="main"
          className="text-xl hover:text-gray-500 transition duraion-500 transform hover:scale-150"
          icon={<IoChevronBack />}
        />
      </p>
    </li>
    {pages
      ? Array.from(Array(pages).keys()).map(n =>
        <li key={n}>
          <PaginationButton active={n + 1 === activePage} onClick={() => { onChange(n + 1) }}>{n + 1}</PaginationButton>
        </li>
      )
      : null
    }
    <li>
      <NavigationButton
        hidden={!canNext}
        disable={!canNext}
        onClick={() => { nextPage(activePage + 1) }}
        color="main"
        className="text-xl hover:text-gray-500 transition duraion-500 transform hover:scale-150"
        icon={<IoChevronForwardSharp />}
      />
    </li>
  </ul>;
};

export default Pagination;