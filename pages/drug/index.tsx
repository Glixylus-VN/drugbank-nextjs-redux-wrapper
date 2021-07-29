import React, { ReactElement, useEffect, useState } from "react";

interface Props {}
interface test {
  name: string;
  age: number;
}

interface test2 {
  people: {
    name: string;
    age: number;
  };
}

export default function index({}: Props): ReactElement {
  const [time, setTime] = useState<Date>(() => new Date(Date.now()));

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date(Date.now()));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const testFunction = (params: test): string => {
    const output = params.name + params.age.toString();
    return output;
  };

  const createPerson = (people: test2["people"]) => {
    const output = people.name + people.age.toString();
    return output;
  };

  let testObject: {
    name: string;
    age: string;
  };

  return (
    <div>
      {time.toUTCString()}
      <ul>
        <li>{testFunction({ name: "abc", age: 10 })}</li>
        <li>{createPerson({ name: "abcd", age: 8 })}</li>
      </ul>
    </div>
  );
}
