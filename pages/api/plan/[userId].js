import dbConnect from '../../../db';
import Plan from '../../../data/plan';

export default async function handler(req, res) {
    const { userId } = req.query;
    console.log(userId);
    try {
        await dbConnect();
        const plans = await Plan.find({ userId : userId });
        const simplifiedPlans = plans.map(plan => ({
            title: plan.title,
            styles: plan.styles,
            startday: plan.startday,
          }));
        console.log(simplifiedPlans);
        return res.status(200).json(simplifiedPlans);
    } catch (error) {
        console.error("Error fetching plans:", error);
        return res.status(500).json({ message: "Error fetching plans" });
    }
}