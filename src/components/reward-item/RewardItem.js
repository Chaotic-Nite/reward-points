import {  useEffect, useState } from "react"
import { Card } from "react-bootstrap"
import { pointCalculator } from "../../pointCalculator"

const RewardItem = (props) => {

    const [rewardPoints, setRewardPoints] = useState(0)
    useEffect(() => {        
        const dollarTotal = props.total.split('.')[0].substring(1)
        
    setRewardPoints(parseInt(props.oldBonus) + pointCalculator(dollarTotal))
    }, [props.account])

    return (
        <>
            <Card.Subtitle className="mb-2 ">Last Receipt Total: {props.total}</Card.Subtitle>
            <Card.Title>Current Point Balance: { rewardPoints.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }</Card.Title>
        </>
    )
}

export default RewardItem