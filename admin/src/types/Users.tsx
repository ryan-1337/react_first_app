import React from "react";

export default interface IUserData {
    id: number,
    userName: string,
    inscriptionDate: Date,
    connexionDate?: Date |null;
}