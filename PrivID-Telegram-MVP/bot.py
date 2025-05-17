"""
Telegram bot that integrates with Holonym for privacy-respecting identity verification.
"""

import os
from telegram import Update
from telegram.ext import ApplicationBuilder, ContextTypes, CommandHandler

TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("Welcome to PrivID. Type /verify to begin identity verification.")

async def verify(update: Update, context: ContextTypes.DEFAULT_TYPE) -> None:
    await update.message.reply_text("Verification with Holonym coming soon...")

if __name__ == "__main__":
    app = ApplicationBuilder().token(TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CommandHandler("verify", verify))

    app.run_polling()
