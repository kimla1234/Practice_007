import React from "react";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import { ProductType } from "@/type/product";

export default  function CardComponent({title, thumbnail}: ProductType) {
  return (
    <Card  className="py-4 w-auto">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <small className="text-default-500">12 Tracks</small>
        <h4 className="font-bold text-large">{title}</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        
        <Image
          alt="Card background"
          className="object-cover rounded-xl"
          src={thumbnail}
          width={270}
        />
      </CardBody>
    </Card>
  );
}

