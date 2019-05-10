module.exports = async function (context, eventHubMessages) {
    context.log(`JavaScript eventhub trigger function called for message array ${eventHubMessages}`);
    
    eventHubMessages.forEach((message, index) => {
        // https://docs.microsoft.com/en-us/azure/digital-twins/how-to-egress-endpoints#event-types
        context.log(`Process message`);
        context.log(`Type = ${context.bindingData.propertiesArray[index].Type}`);
        context.log(`Data: ${JSON.stringify(message, null, ' ')}`);

        if (context.bindingData.propertiesArray[index].Type == `SpaceChange` &&
            message.DataType == `Humidity` &&
            message.Value > 60 ) {
            // TODO: call Zumtobel API
        }
    });
};