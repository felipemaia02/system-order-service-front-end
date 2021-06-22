import React, { useState, useEffect, FormEvent } from "react";

import {assignOrderToDev} from '../../services/order'
import {listDevs} from '../../services/dev'

export default function AssignOrder () {
    const [duration, setDuration] = useState(0)
    const [userId, setUserId] = useState(0)
    const [devs, setDevs] = useState(0)

    let orderId:number

    useEffect(() => {
        const urlSearchParams = new URLSearchParams(window.location.search);
        const params: any = Object.fromEntries(urlSearchParams.entries());
        if (params.orderId) orderId = params.orderId
    })

    const assingOrder = async () => {
        await assignOrderToDev({devId:userId, orderId}, duration)
    }

    return (
      <h1>Assign Order</h1>  
    )
}