import dbConnect from '../../db';
import User from '../../data/user';

export default async function handler(req, res) {
    const { id, name, password, who, styles } = req.body;

    await dbConnect();

    try {
        const existingUser = await User.findOne({ id: id });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        const newUser = new User({ id, name, password, who, styles });
        await newUser.save();
        return res.status(200).json({ message: 'Sign Up successful', user: newUser });
    } catch (error) {
        console.error('Error during sign up:', error.message); // 추가된 로그 출력
        return res.status(500).json({ message: 'Server error' });
    }
}
