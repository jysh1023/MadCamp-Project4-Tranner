import dbConnect from '../../db';
import User from '../../data/user';

export default async function handler(req, res) {
    const { userId, planId } = req.body;

    await dbConnect();

    try {
        const user = await User.findOne({ _id : userId});
        if (!user) {
            return res.status(404).json({ message: 'No User In here' });
        }
        user.plans_id.push(planId);
        await user.save();
        return res.status(200).json({ message: 'Update successful', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}