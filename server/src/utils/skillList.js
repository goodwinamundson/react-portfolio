function SkillList(icon, color, title, description) {
    this.icon = icon;
    this.color = color
    this.title = title;
    this.description = description;
};

const frontend = new SkillList(
    "fas fa-desktop",
    "#5c2a9d",
    "Front-end",
    "React, HTML5, JavaScript, Jquery, Bootstrap, Materialize, UIKit"
);

const backend = new SkillList(
    "fas fa-server",
    "#b5076b",
    "Back-end",
    "Node.JS, Express.JS, MySQL, Sequelize, MongoDB, Mongoose, Handlebars, AJAX"
)

let skillList = [frontend , backend];

export default skillList;