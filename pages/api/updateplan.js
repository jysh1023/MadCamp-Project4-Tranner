import dbConnect from '../../db';
import Plan from '../../data/plan';

export default async function handler(req, res) {

    const { userId, days, day } = req.body;

    await dbConnect();

    try {
        const userPlan = await Plan.findOne({ userId: userId });

        if (!userPlan) {
            return res.status(404).json({ message: 'Plan not found for the user' });
        }

        const dayIndexToUpdate = userPlan.days.findIndex((dayObj) => dayObj.day === days.day);

        if (dayIndexToUpdate === -1) {
            userPlan.days.push({
              day: day,
              details: [
                {
                  title: days.title,
                  content: days.content,
                  API: days.API,
                },
              ],
            });
          } else {
            userPlan.days[dayIndexToUpdate].details[0] = {
                title: days.title,
                content: days.content,
                API: days.API,
            };

        }

        const updatedPlan = await userPlan.save();

        return res.status(200).json({ message: 'Update successful', updatedPlan });
    } catch (error) {
        console.error('Error during update:', error.message);
        return res.status(500).json({ message: 'Server error' });
    }
}
