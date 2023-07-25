import dbConnect from '../../db';
import User from '../../data/user';

export default async function handler(req, res) {
    const { id, password } = req.body;

    await dbConnect();

    try {
        const user = await User.findOne({ name: id, password : password });

        if (!user) {
            return res.status(404).json({ message: 'Invalid ID or password' });
        }
        return res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        return res.status(500).json({ message: 'Server error' });
    }
}