/* This file was generated from a template */

var ldap_obj = {};

ldap_obj.url = '127.0.0.1';
ldap_obj.port = '389';

ldap_obj.roles = ['engineer', 'operator'];
ldap_obj.permissions = ['edit', 'view'];

ldap_obj.domain_component = 'dc=cisco,dc=com';

module.exports = {
   ldap: ldap_obj
};