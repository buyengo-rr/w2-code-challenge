import React from 'react';

function BotCard({ bot, handleClick, dischargeBot }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p><strong>Class:</strong> {bot.bot_class}</p>
      <p><strong>Health:</strong> {bot.health} | <strong>Damage:</strong> {bot.damage} | <strong>Armor:</strong> {bot.armor}</p>
      <p><em>"{bot.catchphrase}"</em></p>
      {dischargeBot && <button className="discharge-button" onClick={(e) => { e.stopPropagation(); dischargeBot(bot); }}>X</button>}
    </div>
  );
}

export default BotCard;
