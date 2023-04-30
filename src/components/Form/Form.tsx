import { useState } from 'react';
import styles from './Form.module.scss';
// type props = {
//   updateData: string;
// };

export const Form: (
  props:
    | { updateData: (value: string, music: boolean, movie: boolean, sex: string) => void }
    | Readonly<{ updateData: (value: string, music: boolean, movie: boolean, sex: string) => void }>
) => JSX.Element = (
  props: { updateData: (value: string, music: boolean, movie: boolean, sex: string) => void }
  // { name: string; music: boolean; movie: boolean; sex: string }
) => {
  const [data] = useState({
    name: '',
    // birthDate: Date.now,
    // country: 'Belarus',
    sex: '',
    music: true,
    movie: true,
    // coding: true,
  });

  const handleInputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.currentTarget;
    const value =
      target.type === 'checkbox'
        ? target.checked
        : target.type === 'radio'
        ? target.id
        : target.value;
    // const name = target.name;
    console.log(value);
  };

  // const handleCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
  //   const target = event.currentTarget;
  //   const checked = target.checked;
  //   const name = target.name;

  //   this.setState({
  //     // name: value,
  //     // birthDate: value,
  //     // country: value,
  //     // sex: value,
  //     [name]: checked,
  //     // movie: checked,
  //     // coding: value,
  //   });
  // };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div>
        <label htmlFor="name" className={styles.label}>
          Your name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className={styles.input}
          value={data.name}
          onChange={handleInputChange}
        />
      </div>

      <div>
        <label htmlFor="birthDate" className={styles.label}>
          Your birthday date
        </label>
        <input type="date" name="birthDate" className={styles.input} />
      </div>

      <div>
        <label htmlFor="country" className={styles.label}>
          Country
        </label>
        <select name="country" className={styles.input}>
          <option value="value1">Belarus</option>
          <option value="value2">Ukraine</option>
          <option value="value3">Russia</option>
        </select>
      </div>

      <div>
        <p>Sex:</p>
        <label htmlFor="male" className={styles.label}>
          Male
        </label>
        <input
          type="radio"
          id="male"
          name="sex"
          className={styles.input}
          // checked={this.state.sex}
          onChange={handleInputChange}
        />
        <label htmlFor="female" className={styles.label}>
          Female
        </label>
        <input
          type="radio"
          id="female"
          name="sex"
          className={styles.input}
          // checked={this.state.sex}
          onChange={handleInputChange}
        />
      </div>

      <div className={styles.checkbox}>
        <p>Your hobbies:</p>
        <div>
          <label htmlFor="music" className={styles.label}>
            Music
          </label>
          <input
            type="checkbox"
            name="music"
            id="music"
            className={styles.input}
            checked={data.music}
            onChange={handleInputChange}
          />
          <label htmlFor="movie" className={styles.label}>
            Movie
          </label>
          <input
            type="checkbox"
            name="movie"
            id="movie"
            className={styles.input}
            checked={data.movie}
            onChange={handleInputChange}
          />
          <label htmlFor="coding" className={styles.label}>
            Coding
          </label>
          <input type="checkbox" name="coding" id="coding" className={styles.input} />
        </div>
      </div>

      <div>
        <label htmlFor="photo" className={styles.label}>
          Choose an image:
        </label>
        <input type="file" name="photo" className={styles.input__file} />
      </div>
      <label htmlFor="">
        <input
          type="submit"
          value="Submit"
          onClick={() => {
            props.updateData(data.name, data.music, data.movie, data.sex);
          }}
        />
      </label>
    </form>
  );
};

// export class Form extends Component<
//   { updateData: (value: string, music: boolean, movie: boolean, sex: string) => void },
//   { name: string; music: boolean; movie: boolean; sex: string }
// > {
//   // <
//   //   { updateData: string },
//   //   {
//   //     name: string;
//   //     // birthDate: () => number;
//   //     // country: string;
//   //     // sex: string;
//   //     // music: boolean;
//   //     // movie: boolean;
//   //     // coding: boolean;
//   //   }
//   // > {
//   constructor(
//     props:
//       | { updateData: (value: string) => void }
//       | Readonly<{ updateData: (value: string) => void }>
//   ) {
//     super(props);
//     this.state = {
//       name: '',
//       // birthDate: Date.now,
//       // country: 'Belarus',
//       sex: '',
//       music: true,
//       movie: true,
//       // coding: true,
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//     // this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
//   }

//   handleInputChange(event: React.FormEvent<HTMLInputElement>) {
//     const target = event.currentTarget;
//     const value =
//       target.type === 'checkbox'
//         ? target.checked
//         : target.type === 'radio'
//         ? target.id
//         : target.value;
//     const name = target.name;

//     console.log(value);

//     //   this.setState({
//     //     [name]: value,
//     //     // birthDate: value,
//     //     // country: value,
//     //     // sex: value,
//     //     // music: value,
//     //     // movie: value,
//     //     // coding: value,
//     //   });
//   }

//   handleCheckboxChange(event: React.FormEvent<HTMLInputElement>) {
//     const target = event.currentTarget;
//     const checked = target.checked;
//     const name = target.name;

//     //   this.setState({
//     //     // name: value,
//     //     // birthDate: value,
//     //     // country: value,
//     //     // sex: value,
//     //     [name]: checked,
//     //     // movie: checked,
//     //     // coding: value,
//     //   });
//   }

//   handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//   };

//   render(): ReactNode {
//     return (
//       <form onSubmit={this.handleSubmit} className={styles.form}>
//         <div>
//           <label htmlFor="name" className={styles.label}>
//             Your name
//           </label>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your name"
//             className={styles.input}
//             value={this.state.name}
//             onChange={this.handleInputChange}
//           />
//         </div>

//         <div>
//           <label htmlFor="birthDate" className={styles.label}>
//             Your birthdate
//           </label>
//           <input type="date" name="birthDate" className={styles.input} />
//         </div>

//         <div>
//           <label htmlFor="country" className={styles.label}>
//             Country
//           </label>
//           <select name="country" className={styles.input}>
//             <option value="value1">Belarus</option>
//             <option value="value2">Ukraine</option>
//             <option value="value3">Russia</option>
//           </select>
//         </div>

//         <div>
//           <p>Sex:</p>
//           <label htmlFor="male" className={styles.label}>
//             Male
//           </label>
//           <input
//             type="radio"
//             id="male"
//             name="sex"
//             className={styles.input}
//             // checked={this.state.sex}
//             onChange={this.handleInputChange}
//           />
//           <label htmlFor="female" className={styles.label}>
//             Female
//           </label>
//           <input
//             type="radio"
//             id="female"
//             name="sex"
//             className={styles.input}
//             // checked={this.state.sex}
//             onChange={this.handleInputChange}
//           />
//         </div>

//         <div className={styles.checkbox}>
//           <p>Your hobbies:</p>
//           <div>
//             <label htmlFor="music" className={styles.label}>
//               Music
//             </label>
//             <input
//               type="checkbox"
//               name="music"
//               id="music"
//               className={styles.input}
//               checked={this.state.music}
//               onChange={this.handleInputChange}
//             />
//             <label htmlFor="movie" className={styles.label}>
//               Movie
//             </label>
//             <input
//               type="checkbox"
//               name="movie"
//               id="movie"
//               className={styles.input}
//               checked={this.state.movie}
//               onChange={this.handleInputChange}
//             />
//             <label htmlFor="coding" className={styles.label}>
//               Coding
//             </label>
//             <input type="checkbox" name="coding" id="coding" className={styles.input} />
//           </div>
//         </div>

//         <div>
//           <label htmlFor="photo" className={styles.label}>
//             Choose an image:
//           </label>
//           <input type="file" name="photo" className={styles.input__file} />
//         </div>
//         <label htmlFor="">
//           <input
//             type="submit"
//             value="Submit"
//             onClick={() => {
//               this.props.updateData(
//                 this.state.name,
//                 this.state.music,
//                 this.state.movie,
//                 this.state.sex
//               );
//             }}
//           />
//         </label>
//       </form>
//     );
//   }
// }
