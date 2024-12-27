import navigationData from "../../data/navigation.json";
import { playfairDisplay } from "../../utils/fonts";
export default function NavigationLinks({ className }) {
  return (
    <>
      {navigationData.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className={`text-base font-semibold text-gray-900 text-[1.2rem] ${className}`}
        >
          {item.name}
        </a>
      ))}
    </>
  );
}
