var exec = require('cordova/exec');

// exports.coolMethod = function (arg0, success, error) {
//     exec(success, error, 'UbibotPluginZendesk', 'coolMethod', [arg0]);
// };


function UbibotPluginZendesk() { }

/**
 * Initializes the Zendesk SDK with the application settings
 *
 * @param appId The Zendesk Support application ID 
 * @param clientId The Zendesk Support client ID
 * @param zendeskUrl The url of the Zendesk Support instance
 * @param successCallback The callback to be executed upon command success
 * @param errorCallback The callback to be executed upon command failure
 */
UbibotPluginZendesk.prototype.initialize = function (appId, clientId, zendeskUrl, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'UbibotPluginZendesk', 'initialize', [appId, clientId, zendeskUrl]);
}

/**
 * Sets an anonymous user identity for tracking the user
 *
 * @param name The name of the user (optional)
 * @param email The email of the user (optional)
 * @param successCallback The callback to be executed upon command success
 * @param errorCallback The callback to be executed upon command failure
 */
UbibotPluginZendesk.prototype.setAnonymousIdentity = function (name, email, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'UbibotPluginZendesk', 'setAnonymousIdentity', [name, email]);
}

/**
 * Opens a native view for viewing the help center
 *
 * @param groupType Either "category" or "section" to filter articles by group type (optional)
 * @param groupIds Array of category or section group identifiers to filter help center articles (optional)
 * @param labels Array of labels to filter help center by (optional)
 * @param successCallback The callback to be executed upon command success
 * @param errorCallback The callback to be executed upon command failure
 */
UbibotPluginZendesk.prototype.showHelpCenter = function (groupType, groupIds, labels, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'UbibotPluginZendesk', 'showHelpCenter', [groupType, groupIds, labels]);
}

/**
 * Opens a native view for viewing a single help center article
 *
 * @param articleId The ID of the article to display
 * @param successCallback The callback to be executed upon command success
 * @param errorCallback The callback to be executed upon command failure
 */
UbibotPluginZendesk.prototype.showHelpCenterArticle = function (articleId, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'UbibotPluginZendesk', 'showHelpCenterArticle', [articleId]);
}

/**
 * Opens a native view allowing the user to submit a ticket
 * 
 * @param subject The subject to assign to the new ticket
 * @param tags An array of tags to assign to the new ticket
 * @param successCallback The callback to be executed upon command success
 * @param errorCallback The callback to be executed upon command failure
 */
UbibotPluginZendesk.prototype.showTicketRequest = function (subject, tags, successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'UbibotPluginZendesk', 'showTicketRequest', [subject, tags]);
}

/**
 * Opens a native view listing the user's previously submitted tickets
 *
 * @param successCallback The callback to be executed upon command success
 * @param errorCallback The callback to be executed upon command failure
 */
UbibotPluginZendesk.prototype.showUserTickets = function (successCallback, errorCallback) {
    exec(successCallback, errorCallback, 'UbibotPluginZendesk', 'showUserTickets', []);
}

var UbibotPluginZendesk = new UbibotPluginZendesk();
module.exports = UbibotPluginZendesk;


