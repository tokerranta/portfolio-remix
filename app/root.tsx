import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { FaMoon, FaSun } from "react-icons/fa";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import SiteNavbar from "./components/SiteNav";
import Page from "./components/Page";
import { useState } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet }
];

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  const [darkmode, setDarkmode] = useState(true);
  return (
    <html lang="en" className={`${darkmode && "dark"}`}>
      <head>
        <Meta />
        <Links />
      </head>
      <body className="dark:bg-gray-900 bg-gray-100 transition-colors duration-700 dark:text-gray-400 text-gray-500">
          <SiteNavbar>
            <button className="hidden lg:block" onClick={() => setDarkmode(current => !current)}>{darkmode ? <FaMoon color="white" size={"2rem"} /> : <FaSun size={"2rem"} />}</button>
          </SiteNavbar>
        <Page>
        <Outlet />
        </Page>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
