import 'dotenv/config'

export default {
    rabbitMQ:{
        url:String(process.env.RabbitMQ_link),
        queues:{
            courseQueue:"course_queue",
        },
    },
};