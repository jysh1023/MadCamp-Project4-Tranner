import dbConnect from '../../db';
import Plan from '../../data/plan';

export default async function handler(req, res) {
    const { userId, who, styles, startday, enddate, city } = req.body;

    await dbConnect();

    try {
        const newPlan = new Plan({ userId, who, styles, startday, enddate, city });
        await newPlan.save();
        console.log(newPlan);
        return res.status(200).json({ message: 'Create plan successful', plan : newUser });
    } catch (error) {
        console.error('Error during sign up:', error.message); // 추가된 로그 출력
        return res.status(500).json({ message: 'Server error' });
    }
}
