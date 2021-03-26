import {  useEffect, useState } from "react"
import { Card } from "react-bootstrap"

const RewardItem = (props) => {
    const [rewardPoints, setRewardPoints] = useState(0)
    useEffect(() => {
        const calculatePoints = (total) => {
            let totalLength = total.length;
            total = parseInt(total.split(',').join(''))
            let difference = 0
            if (totalLength === 2 && total > 50) {
                difference = total - 50;
            } else if (totalLength >2) {
                // Subtracts the first $100 and then multiple it by 2 and adds 50
                difference = ((total - 100) * 2) + 50
            }
            setRewardPoints((parseInt(props.oldBonus) + difference)*1)
        }
        
        const dollarTotal = props.total.split('.')[0].substring(1)
        calculatePoints(dollarTotal)
    }, [props.account])

    return (
        <>
            <Card.Subtitle className="mb-2 ">Last Receipt Total: {props.total}</Card.Subtitle>
            <Card.Title>Current Point Balance: { rewardPoints.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }</Card.Title>
        </>
    )
}

export default RewardItem