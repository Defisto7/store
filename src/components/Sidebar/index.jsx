import React from "react";

import s from "../../styles/Sidebar.module.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <section className={s.sidebar}>
            <div className={s.title}>CATEGORIES</div>
            <nav>
                <ul className={s.menu}>
                    <li>
                        <NavLink to={`/categories/${1}`}>Link</NavLink>
                    </li>
                </ul>
            </nav>
            <div className={s.footer}>
                <a href="/help" target="_blank" className={s.link}>
                    Help
                </a>
                <a
                    href="/terms"
                    target="_blank"
                    className={s.link}
                    style={{ textDecoration: "underline" }}
                >
                    Terms & Conditions
                </a>
            </div>
        </section>
    );
};

export default Sidebar;