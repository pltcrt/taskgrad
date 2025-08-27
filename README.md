# Taskgrad

Taskgrad is a gamified task management application that motivates users to improve themselves by completing tasks. Inspired by RPG mechanics, users create tasks that contribute to the development of personal attributes such as Strength, Intelligence, Spirit, Charisma, and Wealth. Completing tasks levels up the user's character and defines their RPG class.

---

## Table of Contents

- [Concept](#concept)
- [MVP Description](#mvp-description)
- [RPG Classes and Attributes](#rpg-classes-and-attributes)
- [License](#license)

---

## Concept

Taskgrad combines productivity and gamification. The idea is to encourage users to complete real-life tasks by rewarding them with experience, attribute points, and virtual wealth. Users can track their progress, level up, and define their RPG class based on their strongest attributes.

This approach aims to:
- Increase motivation through gamification.
- Encourage skill and personal development.
- Make everyday task management engaging and fun.

---

## MVP Description

The MVP focuses on the core functionality:

1. **User Registration / Login**
   - Local authentication using email and password.
   - User data stored in a local database (for MVP).

2. **Task Management**
   - Create, edit, delete tasks.
   - Assign attributes to tasks: Strength, Intelligence, Spirit, Charisma, Wealth.
   - Set difficulty for each task.

3. **Rewards System**
   - Completing a task gives:
     - Experience points (XP)
     - Gold
     - Attribute points based on the task type

4. **Character Progression**
   - Users have a profile with:
     - Nickname
     - Avatar
     - Level
     - Attributes
     - Class determined at level 5 based on strongest attributes
   - Character classes:
     - Strength → Warrior
     - Intelligence → Mage
     - Spirit → Priest
     - Charisma → Bard
     - Wealth → Rogue

5. **Frontend**
   - Minimal dark-themed design.
   - TailwindCSS used for styling.
   - React + Vite for the web app.

6. **Backend**
   - Node.js + Express server
   - REST API for tasks and user management
   - Prisma as ORM for database management

---

## RPG Classes and Attributes

| Attribute   | Class   | Description |
|------------|---------|-------------|
| Strength   | Warrior | Excels in physical tasks and endurance. |
| Intelligence | Mage | Excels in knowledge and learning tasks. |
| Spirit     | Priest | Excels in mental resilience and spiritual growth. |
| Charisma   | Bard   | Excels in social interactions and networking. |
| Wealth     | Rogue  | Excels in financial tasks and resource management. |

---

## License
This project is open-source and available under the MIT License.
