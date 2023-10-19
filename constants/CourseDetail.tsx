import { Agent, Amenities, Contact, Dollar, Type } from "@/components/Icons/DashboardIcons";
import { FunctionComponent, ReactNode, useState } from "react";

interface IconDictionary {
    [key: string]: ReactNode;
}

export const IconDicts:IconDictionary = {
    "price" : <Dollar />,
    "contact" : <Contact />,
    "agent" : <Agent />,
    "amenities" : <Amenities />,
    "type" : <Type />
}
