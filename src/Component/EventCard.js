import React,{useEffect, useState} from 'react'
import { Card, CardHeader, CardBody, CardFooter, Flex, Avatar, IconButton, Image, Heading, Text, Button, Box } from '@chakra-ui/react'

export default async function EventCard() {

  const [data, setMyArray] = useState([]);

  useEffect(() => {
    async function getYouTubeList() {
      try {
        let url = "'http://localhost:8081/events";
        let res = await fetch(url);
        let data = await res.json();
        return setMyArray(data);

        // console.log(data);
      } catch (err) {
        console.error(err);
      }
    }
    getYouTubeList();
  }, []);

  return (
    <div>
      <section >
        <div>
          <div>
            <h1>Content Archive</h1>
            <p>Enjoy some of my curated content from various sources</p>
            <p>
              {data.map((_id) => (
                <li>
                  <p>id</p>
                </li>
              ))}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
