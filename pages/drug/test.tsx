import React, { ReactElement, useEffect, useState } from "react";
import { Flex, SimpleGrid, Box, Button, Text, Input } from "@chakra-ui/react";
import { increase, decrease } from "../../src/redux/slices/counter";
import { RootState } from "../../src/redux/reducers";
import { useDispatch, useSelector } from "react-redux";

interface Props {}
interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}
interface IStateInput {
  people: IState["people"];
  setPeople: React.Dispatch<React.SetStateAction<IState["people"]>>;
}

export default function index({}: Props): ReactElement {
  // const List = (props: IState) => {
  //   return <div>I am a list</div>;
  // };
  const AddToList: React.FC<IStateInput> = (): JSX.Element => {
    const [input, setInput] = useState({
      name: "",
      age: "",
      note: "",
      url: "",
    });

    const handleChange = (e: any): void => {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
    };

    const handleClick = (): void => {
      if (!input.name || !input.age || !input.url) {
        return;
      }

      setPeople([
        ...people,
        {
          name: input.name,
          age: parseInt(input.age),
          url: input.url,
          note: input.note,
        },
      ]);
    };

    return (
      <div>
        <Input
          placeholder="Name"
          value={input.name}
          onChange={handleChange}
          name="name"
        />
        <Input
          placeholder="Age"
          value={input.age}
          onChange={handleChange}
          name="age"
        />
        <Input
          placeholder="Url"
          value={input.url}
          onChange={handleChange}
          name="url"
        />
        <Input
          placeholder="Note"
          value={input.note}
          onChange={handleChange}
          name="note"
        />
        <Button colorScheme="teal" onClick={handleClick} me="10px">
          123
        </Button>
      </div>
    );
  };

  const List: React.FC<IState> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
      return people.map((person) => {
        return (
          <ul>
            <li>
              Name: {person.name}, age: {person.age}, url: {person.url}, note:{" "}
              {person.note}
            </li>
          </ul>
        );
      });
    };
    return <div>{renderList()}</div>;
  };

  const dispatch = useDispatch();
  const [testWatch, setTestWatch] = useState<boolean>(false);
  // const countState = useSelector((state: RootState) => {
  //   return state.counter.count;
  // });
  // const [people, setPeople] = useState<{ name: string; age: number }[]>([]);
  const [people, setPeople] = useState<IState["people"]>([]);

  const countState = useSelector((state) => {
    return state.counter.count;
  });

  useEffect(() => {
    setPeople([
      {
        name: "John",
        url: "http://",
        age: 30,
        note: "123",
      },
      {
        name: "May",
        url: "http://",
        age: 20,
        note: "321",
      },
    ]);
  }, []);

  return (
    <Flex w="100%" p="10px">
      <SimpleGrid minChildWidth="250px" w="100%" spacing="20px">
        <List people={people} />
        <AddToList people={people} setPeople={setPeople} />

        {/* <Box bg="" height="80px">
          <Button
            colorScheme="teal"
            onClick={() => dispatch(increase())}
            me="10px"
          >
            Redux Test Increase
          </Button>
          <Button
            onClick={() => {
              dispatch(decrease());
              setTestWatch(!testWatch);
            }}
          >
            Redux Test Decrease
          </Button>
          <Text>{countState}</Text>
        </Box>
        <Box bg="" height="80px"></Box> */}
      </SimpleGrid>
    </Flex>
  );
}
