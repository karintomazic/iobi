import { playfairDisplay } from "../../utils/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HeroContent() {
  return (
    <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
      <h1
        className={`text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl ${playfairDisplay.className}`}
      >
        Izdelovanje Okrasnih Betonskih Izdelkov
      </h1>
      <p className="mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
        Odkrijte našo raznoliko ponudbo, ki bodo obogatili vaš dom in ustvarili
        čarobno okolico. V našem izboru boste našli kakovostne betonske klopi,
        žare, fontane ter druge manjše okrasne izdelke.
      </p>
      <div className="mt-10 flex items-center gap-x-6">
        <a
          href="#"
          className="rounded-md bg-primary px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Oglej si izdelke
        </a>

        <a href="#" className="rounded-md px-3.5 py-2.5 shadow-sm border border-gray-400 text-base font-semibold leading-6 text-gray-900">
          Kako do nas
          <span className="pl-4" aria-hidden="true"><FontAwesomeIcon className="text-gray-500" icon={faArrowRight} /></span>
        </a>
      </div>
    </div>
  );
}
