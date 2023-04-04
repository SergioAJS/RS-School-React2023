import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

export const ClassHeader: () => JSX.Element = () => {
  return (
    <header className={styles.header}>
      {/* <h1>Hello World</h1> */}
      <nav>
        <ul className={styles.links__list}>
          <li className={styles.link__item}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? styles.link : isActive ? styles.link__active : styles.link
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className={styles.link__item}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? styles.link : isActive ? styles.link__active : styles.link
              }
              to="/Form"
            >
              Form
            </NavLink>
          </li>
          <li className={styles.link__item}>
            <NavLink
              className={({ isActive, isPending }) =>
                isPending ? styles.link : isActive ? styles.link__active : styles.link
              }
              to="/AboutUs"
            >
              About Us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

// export class ClassHeader extends Component {
//   render(): ReactNode {
//     return (
//       <header className={styles.header}>
//         {/* <h1>Hello World</h1> */}
//         <nav>
//           <ul className={styles.links__list}>
//             <li className={styles.link__item}>
//               <NavLink
//                 className={({ isActive, isPending }) =>
//                   isPending ? styles.link : isActive ? styles.link__active : styles.link
//                 }
//                 to="/"
//               >
//                 Home
//               </NavLink>
//             </li>
//             <li className={styles.link__item}>
//               <NavLink
//                 className={({ isActive, isPending }) =>
//                   isPending ? styles.link : isActive ? styles.link__active : styles.link
//                 }
//                 to="/Form"
//               >
//                 Form
//               </NavLink>
//             </li>
//             <li className={styles.link__item}>
//               <NavLink
//                 className={({ isActive, isPending }) =>
//                   isPending ? styles.link : isActive ? styles.link__active : styles.link
//                 }
//                 to="/AboutUs"
//               >
//                 About Us
//               </NavLink>
//             </li>
//           </ul>
//         </nav>
//       </header>
//     );
//   }
// }
