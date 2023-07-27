import dbConnect from '../../db';
import Plan from '../../data/plan';

export default async function handler(req, res) {

    await dbConnect();

    try {
        const updatedPlan = await Plan.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.json(updatedPlan);
        return res.status(200).json({ message: 'Update successful', user: newUser });
    } catch (error) {
        console.error('Error during sign up:', error.message);
        return res.status(500).json({ message: 'Server error' });
    }
}
