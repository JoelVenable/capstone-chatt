using Microsoft.EntityFrameworkCore.Migrations;

namespace Chatt.React.Migrations
{
    public partial class addedroles : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "82192e5b-2db1-4236-b0b1-d2adef8a2f54", "063072e8-c9a8-4dda-9bff-8eef1e61eac1", "Admin", "ADMIN" });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[] { "91f23053-3f69-48e7-b6f8-7ce28f0f2cb4", "d5de58f9-ebbd-4900-808a-6cf8641f2fa8", "ChatUser", "CHATUSER" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "82192e5b-2db1-4236-b0b1-d2adef8a2f54");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "91f23053-3f69-48e7-b6f8-7ce28f0f2cb4");
        }
    }
}
