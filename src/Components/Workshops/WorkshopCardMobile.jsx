import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button
} from '@material-tailwind/react';

function WorkshopCardMobile() {
  return (
    <div className="my-20">
      <Card className="my-15 mt-6 w-[80%] mx-auto max-w-[280px] sm:max-w-[375px]">
        <CardHeader color="blue-gray" className="relative h-50">
          <img
            src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            RoboKit
          </Typography>
          <Typography>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, a? Esse corrupti sit qui
            ipsam eligendi quo perferendis iusto ut, necessitatibus laborum vel maiores excepturi
            voluptatem voluptate ipsa optio dolorem?
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default WorkshopCardMobile;
