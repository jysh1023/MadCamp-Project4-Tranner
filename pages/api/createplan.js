import dbConnect from '../../db';
import Plan from '../../data/plan';

export default async function handler(req, res) {
    const { userId, title, who, styles, startday, enddate, city } = req.body;

    await dbConnect();

    try {
        const newPlan = new Plan({ userId, title, who, styles, startday, enddate, city });
        await newPlan.save();
        console.log(newPlan);
        return res.status(200).json({ message: 'Create plan successful', plan: newPlan }); // Fixed a typo here (newUser -> newPlan)
    } catch (error) {
        console.error('Error during plan creation:', error.message);
        return res.status(500).json({ message: 'Server error' });
    }
}
