interface cardProp {
  name : string;
  isFriend? : boolean;
}

export function Card ({name, isFriend} : cardProp) {
  return (
    <h2>Hello, {name}! {isFriend && "Welcome my Friend."}</h2>
  );
}