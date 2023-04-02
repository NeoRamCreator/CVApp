import React from "react";





export const Projects = () => {
    console.log("Projects")

    return (
        <>
            <div>
                <div className="content projects">
                    <h1 className="content-projects-title">Простмотр проектов</h1>
                    <div className="content-projects-link">
                        <a href="https://github.com/NeoRamCreator/CVApp" target="_blank" className="a" >Этот сайт на GitHub</a>
                    </div>
                    <h3>Смотреть на GitHub:</h3>
                    <div className="content-projects">
                        <div>
                            <a href="https://neoramcreator.github.io/test-welbex/"
                                target="_blank"
                            >
                                <div className="content-projects_item item1">
                                </div>
                            </a>
                        </div>

                        <div>
                            <a href="https://neoramcreator.github.io/Form-react-webpack/"
                                target="_blank"
                            >
                                <div className="content-projects_item item2">
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="https://neoramcreator.github.io/AboutMe/"
                                target="_blank"
                            >
                                <div className="content-projects_item item3">
                                </div>
                            </a>
                        </div>

                    </div>

                    <h3>Скриншоты:</h3>
                    <div className="content-projects">
                        <div className="content-projects_item ">
                            <div className="img"></div>
                        </div>

                    </div>



                </div>
            </div>
        </>
    )
}