
async function processWebhook(req, res, settings, triggerControllers) {
    try {
        const body = req.body;
        const { userId, eventType, eventData } = body;
        const { actorId, actorRunId } = eventData;

        triggerControllers.forEach((trigger) => {
            if (trigger.params.actionType == req.body.eventType) {
                const msg = `Apify ${userId} ${actorId} ${eventType} ${actorRunId} Process`;
                trigger.execute(msg, body);
            }
        });
        res.status(200).send("OK");
    }
    catch (err) {
        res.status(422).send(err.toString());
    }
}

module.exports = {
    processWebhook
}