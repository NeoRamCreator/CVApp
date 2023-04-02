
import React, {  } from "react";

export const About = (props) => {

    const handleCloseModal  = (e) =>  {
        e.preventDefault()
        props.onCloseModal()
    }

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="madal-title">О себе</h4>
                    </div>
                    <div className="modal-body text">
                        <p className="modal_text">
                            Здравствуйте! Меня зовут Надежда, и я бы хотела рассказать немного о себе.
                        </p>
                        <p>
                            Я являюсь студентом технического вуза. Мне 22 года, и я увлечена всем, что связано с технологиями и инновациями.
                        </p>
                        <p>
                            Я активно развиваю свои знания и навыки, чтобы стать экспертом в своей области. Я уверена, что мой технический бэкграунд и стремление к изучению новых технологий помогут мне успешно выполнять поставленные задачи, а компании развиваться.
                        </p>
                        <p>
                            Я также открыта к общению и сотрудничеству с коллегами, так как считаю, что в команде можно добиться больших результатов. Я готов учиться у более опытных коллег и делиться своими знаниями и опытом с другими.
                        </p>
                        <p>
                            Спасибо за рассмотрение моей кандидатуры.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button
                            className="button"
                            onClick={handleCloseModal}
                        >Закрыть</button>
                    </div>
                </div>

            </div>
        </>
    )
}