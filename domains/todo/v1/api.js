const express = require("express");
const controller = require("./controller");

// SETUP ROUTER
const router = express.Router();

/**
 * Get List Todo
 * @api private
 */
router.get("/", controller.index);

/**
 * create Todo
 * @api private
 */
router.post("/", controller.createTodo);

/**
 * Get Detail Todo
 * @api private
 */
router.get("/:id", controller.detail);

/**
 * Update One Todo
 * @api private
 */
router.patch("/:id", controller.updateOne);

/**
 * Delete One Todo
 * @api private
 */
router.delete("/:id", controller.deleteOne);

router.delete("/", controller.deleteAll);

module.exports = router;
