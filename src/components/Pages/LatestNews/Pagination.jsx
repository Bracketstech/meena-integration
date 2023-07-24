"use client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const Pagination = ({ numberOfPages, currentPage }) => {
  const myArray = new Array(numberOfPages).fill(0);
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div
      data-aos="fade"
      className="flex justify-center Pagination lg:gap-x-[0.83333333333vw] gap-x-[2.5641025641vw]"
    >
      <Link href={`?page=${+currentPage === 1 ? 1 : +currentPage - 1}`}>
        <svg
          className={`flipped  lg:w-[2.1875vw] w-[6.15384615385vw] transition-all duration-300  ${
            +currentPage === 1 || "active"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          width={42}
          height={42}
          viewBox="0 0 42 42"
        >
          <g
            id="Group_89832"
            data-name="Group 89832"
            transform="translate(42) rotate(90)"
          >
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx={21}
              cy={21}
              r={21}
              transform="translate(0)"
              fill="#3b3659"
              opacity="0.4"
            />
            <g
              id="Group_89664"
              data-name="Group 89664"
              transform="translate(11.735 15.777)"
            >
              <path
                id="Path_101469"
                data-name="Path 101469"
                d="M6.652,8.489c-.3-.335-.669-.745-.839-.91C4.109,5.938,2.295,4.514.548,2.952A1.876,1.876,0,0,1,.261.667,1.2,1.2,0,0,1,2.138.317C3.912,1.9,5.75,3.35,7.479,5.016A11.377,11.377,0,0,1,9.155,6.882a3.552,3.552,0,0,1,.58,1.7,2.376,2.376,0,0,1-.443,1.435,16.08,16.08,0,0,1-1.458,1.515,29.126,29.126,0,0,0-4.31,5.245,1.2,1.2,0,0,1-1.868.41,1.868,1.868,0,0,1-.338-2.273A32.228,32.228,0,0,1,6.051,9.092c.068-.075.337-.342.6-.6Z"
                transform="matrix(-0.087, 0.996, -0.996, -0.087, 18.264, 1.524)"
                fill="#fff"
                fillRule="evenodd"
              />
            </g>
          </g>
        </svg>
      </Link>
      <div className="flex lg:gap-x-[0.83333333333vw] gap-x-[2.5641025641vw]">
        {myArray.map((item, index) => (
          <Link
            key={index}
            href={`?page=${index + 1}`}
            className={`number ${
              index == currentPage - 1 && "active"
            } relative lg:w-[2.5vw] w-[7.17948717949vw] flex justify-center items-center`}
          >
            <span className="text-[#313D49] PingAR-Regular lg:text-[1.2vw] text-[3.58974358974vw] lg:h-[1.14583333333vw] h-[4.87179487179vw] block">
              {index + 1}
            </span>
            <img
              src="/images/icons/pagination-circle.svg"
              alt="pagination-circle"
              className="lg:min-w-[3.28125vw] min-w-[9.23076923077vw] absolute top-[50%] transform translate-y-[-50%] left-[50%] translate-x-[-50%] lg:h-[1.45833333333vw] h-[4.10256410256vw] opacity-0"
            />
          </Link>
        ))}
      </div>
      <Link
        href={`?page=${
          +currentPage === numberOfPages ? numberOfPages : +currentPage + 1
        }`}
      >
        <svg
          className={`flipped ${
            +currentPage === numberOfPages || "active"
          }    lg:w-[2.1875vw] w-[6.15384615385vw] transition-all duration-300`}
          xmlns="http://www.w3.org/2000/svg"
          width={42}
          height={42}
          viewBox="0 0 42 42"
        >
          <g
            id="Group_108"
            data-name="Group 108"
            transform="translate(940 -1606) rotate(90)"
          >
            <circle
              id="Ellipse_1"
              data-name="Ellipse 1"
              cx={21}
              cy={21}
              r={21}
              transform="translate(1606 898)"
              fill="#3b3659"
              opacity="0.4"
            />
            <g
              id="Group_89664"
              data-name="Group 89664"
              transform="translate(1618.001 913)"
            >
              <path
                id="Path_101469"
                data-name="Path 101469"
                d="M6.652,8.489c-.3-.335-.669-.745-.839-.91C4.109,5.938,2.295,4.514.548,2.952A1.876,1.876,0,0,1,.261.667,1.2,1.2,0,0,1,2.138.317C3.912,1.9,5.75,3.35,7.479,5.016A11.377,11.377,0,0,1,9.155,6.882a3.552,3.552,0,0,1,.58,1.7,2.376,2.376,0,0,1-.443,1.435,16.08,16.08,0,0,1-1.458,1.515,29.126,29.126,0,0,0-4.31,5.245,1.2,1.2,0,0,1-1.868.41,1.868,1.868,0,0,1-.338-2.273A32.228,32.228,0,0,1,6.051,9.092c.068-.075.337-.342.6-.6Z"
                transform="matrix(0.087, -0.996, 0.996, 0.087, 0, 9.7)"
                fill="#fff"
                fillRule="evenodd"
              />
            </g>
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default Pagination;
