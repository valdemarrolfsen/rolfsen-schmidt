/**
 * Created by rubenschmidt on 16.02.2016.
 */
var kordeCms = angular.module("KordeCms", ['ngFileUpload']);

kordeCms.value('apiUrl', '/cms');

kordeCms.factory('ArticleFactory',
    ['$http', 'apiUrl', function ($http, apiUrl) {
        var endpoint = apiUrl + '/articles';
        return ({
            get: get,
            list: list
        });
        function get(slug) {
            return $http.get(endpoint + '/' + slug)
        }

        function list() {
            return $http.get(endpoint)
        }
    }]);

kordeCms.factory('PageElementFactory',
    ['$http', 'Upload', 'apiUrl', function ($http, Upload, apiUrl) {
        var endpoint = apiUrl + '/pageelements';

        return ({
            get: get,
            update: update,
            updateImageElement: updateImageElement
        });
        function get(id) {
            return $http.get(endpoint + '/' + id)
        }

        function update(element) {
            return $http.put(endpoint + '/' + element.id, element)
        }

        function updateImageElement(element, file) {
            return Upload.upload({
                url: endpoint + '/' + element.id,
                method: 'PUT',
                data: element,
                file: file
            });
        }
    }]);

kordeCms.factory('PageFactory',
    ['$http', 'Upload', 'apiUrl', function ($http, Upload, apiUrl) {
        var endpoint = apiUrl + '/pages';
        return ({
            get: get,
            getChilderen: getChilderen,
            list: list,
            listElements: listElements
        });

        function get(pageslug) {
            return $http.get(endpoint + '/' + pageslug)
        }

        function getChilderen(page_id) {
            return $http.get(endpoint + '/childeren/' + page_id);
        }

        function list() {
            return $http.get(endpoint)
        }

        function listElements(pageslug) {
            return $http.get(endpoint + '/' + pageslug + '/' + 'elements')
        }
    }]);



