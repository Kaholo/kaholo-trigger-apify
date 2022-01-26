
async function webhookProcess(req, res, settings, triggerControllers) {
    try {
        const body = req.body;
        const { userId, eventType, eventData } = body;
        const { actorId, actorRunId } = eventData;

        triggerControllers.forEach((trigger) => {
            const msg = `Apify ${userId} ${actorId} ${eventType} ${actorRunId} Process`;
            trigger.execute(msg, body);
        });
        res.status(200).send("OK");
    }
    catch (err) {
        res.status(422).send(err.toString());
    }
}

async function runCreated(req, res, settings, triggerControllers) {
    if(req.body.eventType == 'ACTOR.RUN.CREATED')
    {
        return webhookProcess(req, res, settings, triggerControllers);
    }
}


async function runSuccessed(req, res, settings, triggerControllers) {
    if(req.body.eventType == 'ACTOR.RUN.SUCCEEDED')
    {
        return webhookProcess(req, res, settings, triggerControllers);
    }
}


async function runFailed(req, res, settings, triggerControllers) {
    if(req.body.eventType == 'ACTOR.RUN.FAILED')
    {
        return webhookProcess(req, res, settings, triggerControllers);
    }
}


async function runAborted(req, res, settings, triggerControllers) {
    if(req.body.eventType == 'ACTOR.RUN.ABORTED')
    {
        return webhookProcess(req, res, settings, triggerControllers);
    }
}


async function runTimedout(req, res, settings, triggerControllers) {
    if(req.body.eventType == 'ACTOR.RUN.TIMED_OUT')
    {
        return webhookProcess(req, res, settings, triggerControllers);
    }
}


async function runResurrected(req, res, settings, triggerControllers) {
    if(req.body.eventType == 'ACTOR.RUN.RESURRECTED')
    {
        return webhookProcess(req, res, settings, triggerControllers);
    }
}

module.exports = {
    runCreated,
    runAborted,
    runFailed,
    runResurrected,
    runTimedout,
    runSuccessed
}