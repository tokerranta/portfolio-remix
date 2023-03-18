import type { LinksFunction } from "@remix-run/node";
import Main from "~/components/Main";
import PageTitle from "~/components/PageTitle";
import contractStyle from "~/routes/contracts.css";

export const links: LinksFunction = () => [
    {
        rel: "stylesheet",
        href: contractStyle
    }
]

export default function ContractsIndexRoute() {

    return (
            <Main>
                <PageTitle>CV</PageTitle>
                <div className="paper">
                    <div className="head bg-gray-400 p-4">
                        <h1 className="text-4xl text-gray-700">Markus Rantanikunen</h1>
                        <h2 className="text-xl text-orange-300">Fullstack web engineer</h2>
                        <p className="my-4 text-xl text-gray-700">Markus is a passionate full stack developer, mainly within  Javascript and React/Node, but also with plenty of .NET experience. </p>
<p className="text-xl text-gray-700">Curiosity and a profound interest in technology is a  driving force in Markus; always learning and acquiring  new skills in the ever changing world of system  development. Whatever his current assignment may be,  Markus is always following some course on Pluralsight or testing some new framework in his spare time.</p> 
<p className="text-xl text-gray-700">Markus has worked in greenfield development projects  as well as maintenance projects and likes to contribute in  as many parts as possible of the development process. He has experience from various industries, such as  fintech, insurance, online gambling, retail and telco.</p> 
<p className="text-xl text-gray-700">As for personality, Markus is an open, amicable team  player; with a can-do positive attitude, keen on sharing  his knowledge and always with a smile on his face.</p>

                    </div>
                    <div className="main">
                        <h2 className="text-4xl mb-4 text-gray-700">Most recent contracts</h2>
                        <h3 className="text-2xl font-bold text-gray-700">Svenska spel, may 2021 - mar 2023</h3>
                        <p className="italic mt-0 text-orange-300">Lead frontend engineer</p>
                        <p className="text-xl text-gray-700">Svenska spel is an online/offsite gaming company. They provide a variety of products such as: sports betting, poker, lottery. I work in the game admin team where my focus is to develop new features for the employees to help them create new betting coupons. The team consists of 4 developers, 2 testers and a scrum master. I have taken the role as a tech lead and I try to teach functional programming principles whenever possible.</p>

                        <h3 className="text-2xl text-gray-700 font-bold">Fora, 2019 - 2021</h3>
                        <p className="italic mt-0 text-orange-300">Fullstack engineer</p>
                        <p className="text-xl text-gray-700">Fora helps companies and their employees to navigate their collectively agreed pension and  insurance solution.</p>
                        <p className="text-xl text-gray-700">I worked on a project called Nova as a senior  fullstack Javascript developer. The goal of the  project was to build a new digital platform for  customers to simplify the process of moving  money between different insurance providers  etc.</p>
                        <p className="text-xl text-gray-700">The team of ~10 persons had full  responsibility for the product, and I was highly  involved in the decisions concerning the tech stack and mentor to junior developers in the  team.</p>

                        <h3 className="text-2xl text-gray-700 font-bold">Klarna, 2018</h3>
                        <p className="italic mt-0 text-orange-300">Fullstack engineer</p>
                        <p className="text-xl text-gray-700">Klarna is one of Europe’s largest banks,  offering online payment solutions to millions  of customers globally. </p>
                        <p className="text-xl text-gray-700">I worked as a developer in the Customer  Support Team, with the Javascript-based chat  platform, built with React and Node</p>
                        <p className="text-xl text-gray-700">The team of ~6 persons had full responsibility  for the product – development, testing,  deployment, monitoring and maintenance.  We worked cross functionally, and I was often  involved in discussions regarding code  structure and architectural decisions.</p>

                    </div>
                    <div className="aside">
                        <h2 className="text-2xl text-orange-400">Tech stack</h2>
                        <ul>
                            <li>React</li>
                            <li>Typescript</li>
                            <li>Remix</li>
                            <li>Redux</li>
                            <li>Jest</li>
                            <li>Material UI</li>
                            <li>Graphql</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>Javascript</li>
                            <li>Node</li>
                            <li>Cypress</li>
                            <li>Rxjs</li>
                            <li>Function Programing</li>
                        </ul>
                    </div>
                    <div className="foot bg-orange-100 p-4 text-gray-700">
                        <div className="flex flex-col gap-2">
                            <h2 className="text-3xl">Contact</h2>
                            <a href="mailto:rantanikunen.markus@gmail.com" target="_blank" rel="noreferrer">Email</a>
                            <a href="https://github.com/tokerranta/" target="_blank" rel="noreferrer">Github</a>
                            <a href="https://www.linkedin.com/in/markus-rantanikunen-3727901b" target="_blank" rel="noreferrer">Linkedin</a>
                        </div>
                    </div>
                </div>

            </Main>
    )
}