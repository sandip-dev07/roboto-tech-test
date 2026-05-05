import Image from "next/image";

const LOGO_URL =
  "https://cdn.sanity.io/images/bvh24m7h/production/cc6704d7c1b5feff1fd92080041410542cc7cc33-108x45.svg";

export default function Header() {
  return (
    <header className="max-w-container h-[110px] bg-background w-full flex items-center justify-between px-5 lg:px-[41px] fixed top-0 left-0 right-0 z-50">
      <div className="h-[35px] lg:h-[45px] w-auto">
        <Image
          height={45}
          width={108}
          src={LOGO_URL}
          alt="Jamb"
          className="h-full w-auto object-cover"
        />
      </div>

      <div className="flex items-center gap-[18px] lg:gap-[26px]">
        {/* Search Icon */}
        <button
          className="w-[20px] lg:w-[24px] h-[22px] lg:h-[26px]"
          aria-label="Search"
        >
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 24.9203 26.2456"
          >
            <circle
              cx="10.1404"
              cy="10.1404"
              r="9.39035"
              stroke="#9C9C9D"
              strokeWidth="1.5"
              fill="none"
            />
            <line
              stroke="#9C9C9D"
              strokeWidth="1.5"
              x1="16.0391"
              x2="24.39"
              y1="17.3644"
              y2="25.7153"
            />
          </svg>
        </button>

        {/* Mail Box Icon */}
        <button
          className="w-[28px] lg:w-[32px] h-[20px] lg:h-[23px]"
          aria-label="Mail"
        >
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 33 23"
          >
            <rect
              x="0.75"
              y="0.75"
              width="30.7105"
              height="21.1667"
              fill="none"
              stroke="#9C9C9D"
              strokeWidth="1.5"
            />
            <path
              d="M0.450012 0.619629L12.3798 9.567L25.5026 0.619629"
              transform="translate(3.12893 4.1523)"
              stroke="#9C9C9D"
              strokeWidth="1.5"
              fill="none"
            />
          </svg>
        </button>

        {/* Menu Icon */}
        <button
          className="w-[27px] lg:w-[31px] h-[20px] lg:h-[23px]"
          aria-label="Menu"
        >
          <svg
            className="block size-full"
            fill="none"
            viewBox="0 0 31.0176 22.9737"
          >
            <line
              stroke="#9C9C9D"
              strokeWidth="1.5"
              x2="31.0175"
              y1="0.75"
              y2="0.75"
            />
            <line
              stroke="#9C9C9D"
              strokeWidth="1.5"
              x2="31.0176"
              y1="11.4868"
              y2="11.4868"
            />
            <line
              stroke="#9C9C9D"
              strokeWidth="1.5"
              x2="31.0176"
              y1="22.2237"
              y2="22.2237"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
