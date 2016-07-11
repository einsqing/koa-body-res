module.exports = function () {
    return function *koaRes(next) {
        try {
            yield* next;

            if (this.data != undefined) {
                this.body = {
                    data: this.data,
                    msg: this.msg || ''
                };
                this.body.code = this.status;
            }
        } catch (err) {
            throw err;
        }
    };
};