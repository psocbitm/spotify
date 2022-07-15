/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  SearchIcon,
  PlusIcon,
  HeartIcon
} from "@heroicons/react/outline";

const navigation = [
  { name: "Home", icon: HomeIcon, href: "#", current: true },
  { name: "Search", icon: SearchIcon, href: "#", current: false },
  { name: "Your Library", icon: FolderIcon, href: "#", current: false },
  { name: "Create Playlist", icon: PlusIcon, href: "#", current: false },
  { name: "Liked Songs", icon: HeartIcon, href: "#", current: false },
];
const secondaryNavigation = [
  { name: "Cookies", href: "#" },
  { name: "Privacy", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <div className="flex flex-col w-1/6 border-r border-gray-200 pt-5 pb-4 bg-white overflow-y-auto fixed h-screen">
      <div className="flex items-center flex-shrink-0 px-4">
        <img
          className="h-8 w-auto"
          src="https://cdn.worldvectorlogo.com/logos/spotify-1.svg"
          alt="Workflow"
        />
      </div>
      <div className="mt-5 flex-grow flex flex-col  ">
        <nav className="flex-1 px-2 space-y-8 bg-white relative h-100" aria-label="Sidebar">
          <div className="space-y-1">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                  "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                )}
              >
                <item.icon
                  className={classNames(
                    item.current
                      ? "text-gray-500"
                      : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 flex-shrink-0 h-6 w-6"
                  )}
                  aria-hidden="true"
                />
                {item.name}
              </a>
            ))}
          </div>
          <div className="absolute bottom-0">
            <div
              className="space-y-1"
              role="group"
              aria-labelledby="projects-headline"
            >
              {secondaryNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="group flex items-center px-3 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50"
                >
                  <span className="truncate">{item.name}</span>
                </a>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
