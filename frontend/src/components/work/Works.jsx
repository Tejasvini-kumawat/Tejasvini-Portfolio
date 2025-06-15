import React, { useEffect, useState } from 'react';
import Workitem from './Workitems';
import { projectData } from './Data';
import { projectNav } from './Data';

const Works = () => {
    const [item, setItem] = useState({ name: 'all' });
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (item.name === 'all') {
            setProjects(projectData);
        } else {
            const newProjects = projectData.filter((project) => {
                return project.category.toLocaleLowerCase() === item.name;
            });
            setProjects(newProjects);
        }
    }, [item]);

    const handleClick = (e, index) => {
        setItem({ name: e.target.textContent.toLocaleLowerCase() });
        setActive(index);
    };

    return (
        <div>
            <div className="work__filters">
                {projectNav.map((item, index) => {
                    return (
                        <span
                            onClick={(e) => {
                                handleClick(e, index);
                            }}
                            className={`work__item ${active === index ? 'active-work' : ''}`}
                            key={index}
                        >
                            {item.name}
                        </span>
                    );
                })}
            </div>

            <div className="work__container container grid">
                {projects.map((item) => {
                    return <Workitem item={item} key={item.id} />;
                })}
            </div>
        </div>
    );
};

export default Works;
