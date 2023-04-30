export const FormCard: (props: {
  name: string;
  music: boolean;
  movie: boolean;
  sex: string;
}) => JSX.Element = (props: { name: string; music: boolean; movie: boolean; sex: string }) => {
  return (
    <div>
      {props.name}
      {props.music && `music`}
      {props.movie && `movie`}
      {props.sex}
    </div>
  );
};
